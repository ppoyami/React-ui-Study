const colors = {
  textColor: '#555555',
  subTextColor: '#d9dadb',
  primaryColor: '#04c471',
  secondaryColor: '#ba8882',
  inputBorderColor: '#dadada',
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
