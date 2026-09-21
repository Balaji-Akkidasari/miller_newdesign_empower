import React from 'react';

export default function Legal({ title }) {
  return (
    <section className="pagehead" style={{ minHeight: '40vh' }}>
      <div className="inner">
        <div className="txt">
          <span className="eyebrow">Legal</span>
          <h1>{title}</h1>
          <p className="sub">This page is a placeholder — add your {title.toLowerCase()} content here.</p>
        </div>
      </div>
    </section>
  );
}
