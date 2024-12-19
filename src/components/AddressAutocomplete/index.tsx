import React, { useEffect, useRef, useState } from 'react';
import { TextField, TextFieldProps } from '@mui/material';

interface AddressAutocompleteProps extends Omit<TextFieldProps, 'onChange'> {
  onChange: (address: string, placeDetails?: google.maps.places.PlaceResult) => void;
  value?: string;
}

const AddressAutocomplete: React.FC<AddressAutocompleteProps> = ({ onChange, value, ...textFieldProps }) => {
  const [inputValue, setInputValue] = useState(value || '');
  const inputRef = useRef<HTMLInputElement>(null);
  const autocompleteRef = useRef<google.maps.places.Autocomplete | null>(null);

  useEffect(() => {
    if (value !== undefined && value !== inputValue) {
      setInputValue(value);
    }
  }, [value]);

  useEffect(() => {
    if (window.google && inputRef.current && !autocompleteRef.current) {
      autocompleteRef.current = new window.google.maps.places.Autocomplete(inputRef.current, {
        componentRestrictions: { country: 'AU' },
        fields: ['address_components', 'formatted_address', 'geometry'],
        types: ['address']
      });

      autocompleteRef.current.addListener('place_changed', () => {
        const place = autocompleteRef.current?.getPlace();
        if (place?.formatted_address) {
          setInputValue(place.formatted_address);
          onChange(place.formatted_address, place);
        }
      });
    }
  }, [onChange]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    setInputValue(newValue);
    onChange(newValue);
  };

  return (
    <TextField
      {...textFieldProps}
      value={inputValue}
      onChange={handleInputChange}
      inputRef={inputRef}
      sx={{
        '& .MuiOutlinedInput-root': {
          color: '#2C3E50',
          '&:hover fieldset': {
            borderColor: '#4DD8E6',
          },
          '&.Mui-focused fieldset': {
            borderColor: '#4DD8E6',
          },
        },
        '& .MuiInputLabel-root': {
          color: '#5D6D7E',
          '&.Mui-focused': {
            color: '#4DD8E6',
          }
        },
        '& .MuiOutlinedInput-input': {
          color: '#2C3E50',
        },
        ...textFieldProps.sx
      }}
    />
  );
};

export default AddressAutocomplete;
