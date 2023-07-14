import { Button, FormControl, Grid, TextField, styled } from '@mui/material';
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const contactSchema = yup
  .object({
    name: yup.string().required(),
    email: yup.string().email().required(),
    message: yup.string().required(),
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
  const onSubmit = (data: any) => {
    console.log(data);
  };
  console.log({ errors });

  return (
    <form
      style={{ height: '100%' }}
      onSubmit={handleSubmit((data) => console.log(data))}
    >
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
            />
          )}
        />
        <Button
          variant="contained"
          type="submit"
          sx={{
            width: '50%',
            borderRadius: '14px',
            background: '#7FA0A5',
            '&: hover': {
              background: '#6A97AA',
            },
          }}
          onSubmit={handleSubmit(onSubmit)}
        >
          Изпрати
        </Button>
        {/* <div>или</div> */}
      </FormControl>
    </form>
  );
}

export default ContactForm;
