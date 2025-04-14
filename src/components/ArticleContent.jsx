import React from "react";

const ArticleContent = ({ content }) => {
  return (
    <div>
      {/* Pastikan konten ditampilkan dengan aman */}
      <p dangerouslySetInnerHTML={{ __html: content }}></p>
    </div>
  );
};

export default ArticleContent;
