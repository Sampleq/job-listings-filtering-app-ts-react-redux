import { useAppDispatch } from '@/redux/react-hooks';
import { deleteError } from '@/redux/slices/errorSlice';
import { selectError } from '@/redux/slices/errorSliceSelectors';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { toast, ToastContainer } from 'react-toastify';

function Error() {
  const errorMessage = useSelector(selectError);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (errorMessage) {
      toast.error<string>(errorMessage, {
        autoClose: 3000,
      });
      dispatch(deleteError());
    }
  }, [errorMessage]);

  return <ToastContainer />;
}

export { Error };
