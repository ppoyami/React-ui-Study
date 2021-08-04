const colors = {
  textColor: '#eaeaea',
  activeTextColor: '#131b21',
  disabledTextColor: '#384f62',
  primaryColor: '#424242',
  secondaryColor: '#90caf9',
};

export const MODE = {
  light: {
    bgColor: '#F8F7F4',
    textColor: '#31302E',
    borderColor: '1px solid #eaeaea',
  },
  dark: {
    bgColor: '#1E1E22',
    textColor: '#ccc',
    borderColor: '1px solid #2c2d33',
  },
};

const align = {
  flexHorizontal: {
    display: 'flex',
    justifyContent: 'center',
  },
  flexVertical: {
    display: 'flex',
    alignItems: 'center',
  },
  flexCenter: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  positionCenter: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%,-50%)',
  },
};

export const theme = { colors, align };
