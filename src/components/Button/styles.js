export default ({ themeStyles }) => ({
  btn: {
    width: '100%',
    height: 52,
    backgroundColor: themeStyles.color_primary,
    borderRadius: 10,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  btnText: {
    fontSize: 16,
    color: themeStyles.color_btn_text_color,
  }
})
