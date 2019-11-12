const createErrorPopup  = {

  errorPopup: function(errorText) {
    let errorPopup =
      `<div class="modal" tabindex="-1" id="errorPopup" role="dialog">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">Error</h5>
                    <button type="button" id="close" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <p>${errorText}</p>
                </div>
            </div>
         </div>
  </div>`;
    document.getElementById('news').insertAdjacentHTML('afterend', errorPopup);
    document.getElementById('close').addEventListener("click", () => {
      document.getElementById('errorPopup').style.display = 'none';
    });
  }
};

Object.freeze(createErrorPopup);
export default createErrorPopup;