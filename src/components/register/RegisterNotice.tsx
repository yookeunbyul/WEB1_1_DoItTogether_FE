const RegisterNotice = () => {
  return (
    <div className='flex flex-col gap-2'>
      <p className='text-12 font-semibold text-black02'>2-10자리 한글 및 영문</p>
      <div className='flex flex-col gap-1 text-gray02'>
        <span className='text-10'>두잇투게더는 본명 사용을 권장해요.</span>
        <span className='text-10'>신중하게 본인을 잘 나타내는 이름을 설정해주세요.</span>
        {/* TODO 정책 필요 */}
        <span className='text-10'>이름은 0일마다 변경 가능합니다.</span>
      </div>
    </div>
  );
};

export default RegisterNotice;
