import { useState, FC, ChangeEvent } from 'react';
import { Button, Box, Typography } from '@mui/material';
import { useAuth } from '../../providers/AuthProvider';
import { uploadStoryImage } from '../../services/illustrations';

interface ImageUploadProps {
  onUpload: (url: string) => void;
}

const ImageUpload: FC<ImageUploadProps> = ({ onUpload }) => {
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState('');
  const { user } = useAuth();

  const handleFileChange = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    setUploading(true);
    setError('');

    try {
      const downloadURL = await uploadStoryImage(file, user?.uid || '');
      console.log('File uploaded:', downloadURL);
      setUploading(false);
      if (onUpload) onUpload(downloadURL);
    } catch (err) {
      console.error('Error uploading file:', err);
      setError('Failed to upload image. Please try again.');
      setUploading(false);
    }
  };

  return (
    <Box>
      <input
        accept="image/*"
        style={{ display: 'none' }}
        id="upload-button-file"
        type="file"
        onChange={handleFileChange}
      />
      <label htmlFor="upload-button-file">
        <Button variant="contained" component="span" disabled={uploading}>
          {uploading ? 'Uploading...' : 'Upload Image'}
        </Button>
      </label>
      {error && <Typography color="error">{error}</Typography>}
    </Box>
  );
};

export default ImageUpload;
