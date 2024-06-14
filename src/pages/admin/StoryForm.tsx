import { Button, FormControl, Stack, TextField } from '@mui/material';
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import StoryEditor from '../../components/admin/TextEditor';
import { createStory } from '../../services/stories';

const storySchema = yup
  .object({
    title: yup.string().required('Трябва да посочиш заглавие на приказката!'),
    text: yup.string().required('Приказката трябва да има съдържание!'),
  })
  .required();

function StoryForm() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(storySchema),
    defaultValues: {
      title: '',
    },
  });
  const onSubmit = async (data: any) => {
    const { text, title } = data;
    try {
      const story = {
        text,
        title,
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
            height: '100%',
            justifyContent: 'space-evenly',
            alignItems: 'center',
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
                id="name"
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
}

export default StoryForm;
