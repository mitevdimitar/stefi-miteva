import {
  Button,
  FormControl,
  Stack,
  TextField,
  Box,
  Typography,
  useTheme,
} from '@mui/material';
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import StoryEditor from './TextEditor';
import { createStory } from '../../services/stories';
import ImageUpload from './ImageUpload';
import { Story } from '../../types';
import { FC } from 'react';

const storySchema = yup
  .object({
    title: yup.string().required('Трябва да посочиш заглавие на приказката!'),
    text: yup.string().required('Приказката трябва да има съдържание!'),
    excerpt: yup
      .string()
      .required(
        'Приказката трябва да има откъс, който да се показва на заглавната страница!'
      ),
    slug: yup
      .string()
      .required('Приказката трябва да има slug! Това е разширението на url-a!'),
    imageUrl: yup.string().required('Трябва да качиш изображение!'),
  })
  .required();

interface StoryFormProps {
  story?: Story | null;
}

const StoryForm: FC<StoryFormProps> = ({ story }) => {
  const {
    control,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(storySchema),
    defaultValues: {
      title: story?.title || '',
      text: story?.content || '',
      excerpt: story?.excerpt || '',
      slug: story?.slug || '',
      imageUrl: story?.imageUrl || '',
    },
  });
  console.log({ story });
  const theme = useTheme();
  const title = watch('title');

  const onSubmit = async (data: any) => {
    const { text, title, excerpt, slug, imageUrl } = data;
    try {
      const story = {
        text,
        title,
        excerpt,
        slug,
        imageUrl,
      };
      const created = await createStory(story);
      console.log({ created });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Stack width={'100%'} paddingX={{ xs: 0, md: '20%' }}>
      <form style={{ height: '100%' }} onSubmit={handleSubmit(onSubmit)}>
        <FormControl
          fullWidth
          sx={{
            justifyContent: 'space-evenly',
            alignItems: 'center',
            gap: theme.spacing(2),
          }}
        >
          <Controller
            control={control}
            name="title"
            render={({ field: { onChange, value } }) => (
              <TextField
                fullWidth
                value={value}
                onChange={onChange}
                id="title"
                placeholder="Заглавие"
                error={!!errors.title}
                helperText={errors.title?.message}
              />
            )}
          />
          <Controller
            control={control}
            name="text"
            render={({ field: { onChange, value } }) => (
              <StoryEditor value={value} onTextChange={onChange} />
            )}
          />
          <Controller
            control={control}
            name="excerpt"
            render={({ field: { onChange, value } }) => (
              <TextField
                fullWidth
                value={value}
                onChange={onChange}
                id="excerpt"
                placeholder="Откъс"
                error={!!errors.excerpt}
                helperText={errors.excerpt?.message}
                multiline
              />
            )}
          />
          <Controller
            control={control}
            name="slug"
            render={({ field: { onChange, value } }) => (
              <TextField
                fullWidth
                value={value}
                onChange={onChange}
                id="slug"
                placeholder="Slug"
                error={!!errors.slug}
                helperText={errors.slug?.message}
              />
            )}
          />
          {/* Image Upload Field */}
          <Controller
            control={control}
            name="imageUrl"
            render={({ field: { onChange, value } }) => (
              <Box width="100%">
                <ImageUpload onUpload={(url: string) => onChange(url)} />
                {errors.imageUrl && (
                  <Typography color="error">
                    {errors.imageUrl?.message}
                  </Typography>
                )}
                {value && (
                  <Box mt={2}>
                    <img src={value} alt={title} style={{ maxHeight: 200 }} />
                  </Box>
                )}
              </Box>
            )}
          />
          <Button
            variant="contained"
            type="submit"
            //disabled={loading}
            sx={{
              width: '50%',
              borderRadius: '14px',
              background: '#7FA0A5',
              '&: hover': {
                background: '#6A97AA',
              },
            }}
          >
            Запази
          </Button>
        </FormControl>
      </form>
    </Stack>
  );
};

export default StoryForm;
