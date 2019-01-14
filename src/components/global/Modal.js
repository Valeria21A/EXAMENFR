const Modal =  () => (
  <Popup
    trigger={<button className="button"> Open Modal </button>}
    modal
    closeOnDocumentClick
  >
    <span> Modal content </span>
  </Popup>
)
