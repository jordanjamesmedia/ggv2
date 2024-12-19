declare namespace google.maps {
  namespace places {
    class Autocomplete {
      constructor(
        inputField: HTMLInputElement,
        opts?: AutocompleteOptions
      );
      addListener(eventName: string, handler: () => void): void;
      getPlace(): PlaceResult;
    }

    interface AutocompleteOptions {
      componentRestrictions?: {
        country: string | string[];
      };
      fields?: string[];
      types?: string[];
    }

    interface PlaceResult {
      address_components?: AddressComponent[];
      formatted_address?: string;
      geometry?: {
        location: {
          lat(): number;
          lng(): number;
        };
      };
    }

    interface AddressComponent {
      long_name: string;
      short_name: string;
      types: string[];
    }
  }
}
