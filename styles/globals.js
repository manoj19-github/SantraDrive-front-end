import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  html: {
    padding: [{ unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }],
    fontSize: [{ unit: '%V', value: 0.625 }],
    overflowX: 'hidden !important',
    height: [{ unit: 'vh', value: 100 }],
    margin: [{ unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }],
    fontFamily: '-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif'
  },
  body: {
    padding: [{ unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }],
    fontSize: [{ unit: '%V', value: 0.625 }],
    overflowX: 'hidden !important',
    height: [{ unit: 'vh', value: 100 }],
    margin: [{ unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 0 }],
    fontFamily: '-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif'
  },
  'a': {
    color: 'inherit',
    textDecoration: 'none'
  },
  '*': {
    boxSizing: 'border-box'
  },
  'main-div': {
    maxHeight: [{ unit: 'string', value: 'auto' }],
    width: [{ unit: 'vw', value: 100 }],
    overflowX: 'hidden !important',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexFlow: 'column wrap',
    overflowY: 'auto'
  },
  'third-div': {
    minHeight: [{ unit: 'string', value: 'auto' }]
  },
  'second-div': {
    maxHeight: [{ unit: 'vh', value: 20 }],
    margin: [{ unit: 'rem', value: 1 }, { unit: 'rem', value: 1 }, { unit: 'rem', value: 1 }, { unit: 'rem', value: 1 }]
  },
  'parent-div': {
    height: [{ unit: '%V', value: 1 }],
    width: [{ unit: '%H', value: 1 }],
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexFlow: 'column wrap'
  },
  'parent-div-first': {
    width: [{ unit: 'vw', value: 50 }],
    backgroundColor: 'rgba(6, 73, 121,0.5)',
    boxShadow: [{ unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 2 }, { unit: 'px', value: 2 }, { unit: 'string', value: 'rgba(0,0,0,0.5)' }],
    borderRadius: '2rem',
    height: [{ unit: 'string', value: 'auto' }],
    fontSize: [{ unit: 'rem', value: 1 }],
    'screen&&<w565': {
      width: [{ unit: 'vw', value: 80 }]
    },
    'screen&&<w420': {
      width: [{ unit: 'vw', value: 90 }]
    }
  },
  'download-box': {
    width: [{ unit: 'vw', value: 50 }],
    backgroundColor: 'rgba(6, 73, 121,0.5)',
    boxShadow: [{ unit: 'px', value: 0 }, { unit: 'px', value: 0 }, { unit: 'px', value: 2 }, { unit: 'px', value: 2 }, { unit: 'string', value: 'rgba(0,0,0,0.5)' }],
    borderRadius: '2rem',
    height: [{ unit: 'string', value: 'auto' }],
    fontSize: [{ unit: 'rem', value: 1 }],
    'screen&&<w565': {
      width: [{ unit: 'vw', value: 80 }]
    },
    'screen&&<w420': {
      width: [{ unit: 'vw', value: 90 }]
    }
  },
  'download-box': {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: [{ unit: 'rem', value: 1 }, { unit: 'rem', value: 1 }, { unit: 'rem', value: 1 }, { unit: 'rem', value: 1 }],
    flexFlow: 'column wrap'
  },
  'dropZone-box': {
    height: [{ unit: 'rem', value: 20 }],
    maxWidth: [{ unit: 'vw', value: 40 }],
    margin: [{ unit: 'rem', value: 1 }, { unit: 'px', value: 0 }, { unit: 'rem', value: 2 }, { unit: 'px', value: 0 }],
    borderRadius: '2rem',
    cursor: 'pointer'
  },
  'dropZone-box:focus': {
    outline: 'none'
  },
  h1: {
    fontSize: [{ unit: 'rem', value: 3 }, { unit: 'string', value: '!important' }],
    letterSpacing: [{ unit: 'rem', value: 0.4 }],
    color: '#fff',
    textShadow: [{ unit: 'px', value: 3 }, { unit: 'px', value: 3 }, { unit: 'px', value: 3 }, { unit: 'string', value: 'rgba(0,0,0,0.4)' }, { unit: 'px', value: NaN }, { unit: 'px', value: -1 }, { unit: 'px', value: 5 }, { unit: 'string', value: 'rgba(0,0,0,0.4)' }],
    overflow: 'hidden'
  },
  // .dropZone-box:after{
  content:"Drag & Drop Files Here";
  font-size:1.8rem;
  margin-top:4rem;
}
  'dropZone-box p': {
    width: [{ unit: '%H', value: 1 }]
  },
  imageFile: {
    marginLeft: [{ unit: 'rem', value: 2 }],
    background: 'rgba(6, 73, 121,0.5)',
    width: [{ unit: 'rem', value: 2 }]
  },
  dropBox: {
    width: [{ unit: '%H', value: 0.7 }],
    height: [{ unit: '%V', value: 0.9 }],
    border: [{ unit: 'px', value: 1 }, { unit: 'string', value: 'dashed' }, { unit: 'string', value: 'yellow' }],
    margin: [{ unit: 'rem', value: 1 }, { unit: 'rem', value: 1 }, { unit: 'rem', value: 1 }, { unit: 'rem', value: 1 }],
    borderRadius: '1rem',
    transition: '0.8s all linear'
  },
  dropBoxdanger: {
    border: [{ unit: 'px', value: 1 }, { unit: 'string', value: 'dashed' }, { unit: 'string', value: 'red' }]
  },
  dropBoxsuccess: {
    border: [{ unit: 'px', value: 1 }, { unit: 'string', value: 'dashed' }, { unit: 'string', value: 'green' }]
  },
  'form-div': {
    width: [{ unit: '%H', value: 1 }],
    display: 'flex',
    justifyContent: 'flex-start !important',
    alignItems: 'center',
    flexFlow: 'column wrap'
  },
  // .form-control{
  width:70%;
  text-align:center;
  margin:auto;
}
});
