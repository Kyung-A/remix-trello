import React from 'react';

interface IListProps {
  children: React.ReactNode;
}

const List = ({ children }: IListProps) => {
  return (
    <div className="w-[272p] mx-2 box-border p-2 bg-gray-200 rounded-sm">
      <div className="flex items-center mb-3">
        <input type="text" />
        <button>더보기</button>
      </div>
      <ul>{children}</ul>
      <button>+ Add a card</button>
    </div>
  );
};

export default List;
