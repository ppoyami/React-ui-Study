const colors = {
  textColor: '#eaeaea',
  activeTextColor: '#131b21',
  disabledTextColor: '#384f62',
  primaryColor: '#424242',
  secondaryColor: '#90caf9',
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
