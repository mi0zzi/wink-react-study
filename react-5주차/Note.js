import React, { useState } from 'react';

export function NoteInput({ onAdd }) {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const add = () => {
    onAdd(title, content);
    setTitle('');
    setContent('');
  };

  return (
    <div className="note-input">
      <input value={title} onChange={e => setTitle(e.target.value)} placeholder="제목" />
      <input value={content} onChange={e => setContent(e.target.value)} placeholder="내용" />
      <button onClick={add}>추가</button>
    </div>
  );
}

export function NoteItem({ title, content }) {
  return (
    <div className="note-item">{`${title} - ${content}`}</div>
  );
}
