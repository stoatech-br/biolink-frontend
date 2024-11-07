
import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      backgroundColor: string;
      backgroundBoxList: string;
      backgroundButton: string;
      backgroundButtonTabFocus: string;
      borderColor: string;
      text: string;
      subtitle: string;
    };
    fonts: {
      body: string;
      heading: string;
    };
    size: {
      title: string;
      subtitle: string;
    };
  }
}

