import { createSelector } from "reselect";

const selectModal = state => state.bookModal;

export const selectModalState = createSelector(
	[selectModal],
	bookModal => bookModal.modalIsClosed
)

export const selectModalContent = createSelector(
	[selectModal],
	bookModal => bookModal.modalContent
)