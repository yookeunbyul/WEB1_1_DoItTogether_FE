import InviteLink from '@/components/InviteLinkContainer/InviteLink/InviteLink';

const InviteLinkContainer = () => {
  return (
    <div className='flex flex-col gap-2'>
      <p className='text-14'>초대 링크</p>
      <InviteLink />
    </div>
  );
};

export default InviteLinkContainer;
