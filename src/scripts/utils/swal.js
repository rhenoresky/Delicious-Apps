import swal from 'sweetalert';

const swalSuccess = (title) => {
  swal({
    title,
    icon: 'success',
    buttons: {
      confirm: true,
    },
  });
};

const swalError = (title) => {
  swal({
    title,
    icon: 'error',
    buttons: {
      confirm: true,
    },
  });
};

export {swalSuccess, swalError};
