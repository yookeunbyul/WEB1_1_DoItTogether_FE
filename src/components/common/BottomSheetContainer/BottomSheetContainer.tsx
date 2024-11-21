import { Sheet } from 'react-modal-sheet';
import { useState } from 'react';
import BottomSheetCloseBtn from './BottomSheetCloseBtn/BottomSheetCloseBtn';
import BottomSheetTitle from './BottomSheetTitle/BottomSheetTitle';

const BottomSheetContainer = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <button onClick={() => setOpen(true)}>Open sheet</button>

      <Sheet
        isOpen={isOpen}
        onClose={() => setOpen(false)}
        detent='content-height'
        disableDrag={true}
      >
        <div className='relative mx-auto h-full w-full max-w'>
          <Sheet.Container>
            <BottomSheetCloseBtn handleClick={() => setOpen(false)} />
            <Sheet.Header>
              <BottomSheetTitle title='모임 변경' />
            </Sheet.Header>
            <Sheet.Content>
              <div className='px-5 py-8'>Some content</div>
            </Sheet.Content>
          </Sheet.Container>
        </div>
        <Sheet.Backdrop />
      </Sheet>
    </>
  );
};

export default BottomSheetContainer;
