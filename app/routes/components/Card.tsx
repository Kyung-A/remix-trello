const Card = () => {
  return (
    <li className="box-border p-2 mb-3 bg-white rounded-sm">
      <input type="text" placeholder="내용을 입력해주세요." />
      <div className="">
        <p>블라블라</p>
        <button>수정</button>
      </div>
    </li>
  );
};

export default Card;
