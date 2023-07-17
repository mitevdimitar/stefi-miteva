import { useEffect, useState } from 'react';
import emailjs from '@emailjs/browser';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import {
  Button,
  FormControl,
  Stack,
  TextField,
  Typography,
  styled,
} from '@mui/material';
import { Controller, useForm } from 'react-hook-form';

const contactSchema = yup
  .object({
    name: yup.string().required('Забрави да посочиш от кого е съобщението!'),
    email: yup
      .string()
      .email('Мейлът не е правилно попълнен!')
      .required('Нужно е да посочиш мейл, за да се свържем с теб!'),
    message: yup.string().required('Какво искаш да ни напишеш?'),
  })
  .required();

const CustomTextField = styled(TextField)(({ theme }) => {
  return {
    [theme.breakpoints.up('md')]: {
      width: '70%',
    },
    [theme.breakpoints.down('md')]: {
      width: '90%',
    },
    '& .MuiInputBase-root': {
      borderRadius: '14px',
    },
  };
});

function ContactForm() {
  const [messageSent, setMessageSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(contactSchema),
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
  });

  useEffect(
    () => emailjs.init(process.env.REACT_APP_MAIL_PUBLIC_KEY as string),
    []
  );

  const onSubmit = async (data: any) => {
    try {
      setLoading(true);
      await emailjs.send(
        process.env.REACT_APP_MAIL_SERVICE_ID as string,
        process.env.REACT_APP_MAIL_TEMPLATE_ID as string,
        { ...data }
      );
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
      setMessageSent(true);
    }
  };

  return (
    <>
      {messageSent ? (
        <Stack
          sx={{ height: '100%' }}
          alignItems={'center'}
          justifyContent={'center'}
          pb={7}
        >
          <MailOutlineIcon sx={{ fontSize: '4.5rem' }} />
          <Typography variant="h6">Съобщението е изпратено успешно!</Typography>
        </Stack>
      ) : (
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
              name="name"
              render={({ field: { onChange, value } }) => (
                <CustomTextField
                  value={value}
                  onChange={onChange}
                  id="name"
                  placeholder="Име"
                  error={!!errors.name}
                  helperText={errors.name?.message}
                />
              )}
            />
            <Controller
              control={control}
              name="email"
              render={({ field: { onChange, value } }) => (
                <CustomTextField
                  value={value}
                  onChange={onChange}
                  id="email"
                  placeholder="E-mail"
                  error={!!errors.email}
                  helperText={errors.email?.message}
                />
              )}
            />
            <Controller
              control={control}
              name="message"
              render={({ field: { onChange, value } }) => (
                <CustomTextField
                  value={value}
                  onChange={onChange}
                  id="message"
                  placeholder="Съобщение"
                  multiline
                  rows={6}
                  error={!!errors.message}
                  helperText={errors.message?.message}
                />
              )}
            />
            <Button
              variant="contained"
              type="submit"
              disabled={loading}
              sx={{
                width: '50%',
                borderRadius: '14px',
                background: '#7FA0A5',
                '&: hover': {
                  background: '#6A97AA',
                },
              }}
            >
              Изпрати
            </Button>
            {/* <div>или</div> */}
          </FormControl>
        </form>
      )}
    </>
  );
}

export default ContactForm;
