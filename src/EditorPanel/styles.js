import {
  shadow,
  backgroundPrimary,
  backgroundSecondary,
  highlightPrimary,
  borderRadius,
  highlightPrimaryStrong,
  fontPrimary,
  textPrimary
} from '../styleVariables'

export const styles = {
  variable: {
    backgroundColor: '#f0fcff',
    color: '#3387a0',
    padding: '2px 5px 2px 5px',
    borderRadius: '3px',
    border: `solid 1px #55c0df`,
    fontFamily: 'Arial',
    fontSize: '14px',
    fontStretch: 'normal',
    fontStyle: 'normal',
    lineHeight: '1.5',
    letterSpacing: 'normal',
    cursor: 'default'
  },
  editorPanel: {
    boxShadow: shadow,
    borderRadius: borderRadius,
    backgroundColor: backgroundPrimary,
    border: `solid 1px ${highlightPrimaryStrong}`
  },
  textPanel: {
    padding: '5px',
    display: 'inline-block',
    fontFamily: 'Arial',
    fontSize: '14px',
    fontWeight: 'normal',
    fontStretch: 'normal',
    fontStyle: 'normal',
    lineHeight: '1.5',
    letterSpacing: 'normal'
  },
  panelHeader: {
    ...fontPrimary,
    width: '100%',
    display: 'flex',
    backgroundColor: highlightPrimary,
    deleteButton: {
      padding: '2px 5px 2px 5px',
      display: 'flex',
      justifyContent: 'flex-end',
      color: textPrimary
    },
    title: {
      width: '100%',
      display: 'flex',
      justifyContent: 'flex-start',
      padding: '5px 5px 5px 5px'
    }
  }
}
