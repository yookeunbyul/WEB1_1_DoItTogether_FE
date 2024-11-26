const PresetCategory = () => {
  const category = ['거실', '주방', '욕실', '침실', '기타'];
  return (
    <div className='flex px-5'>
      {category.map(cate => (
        <button key={cate} className='pr-4 text-14'>
          {cate}
        </button>
      ))}
    </div>
  );
};

export default PresetCategory;
