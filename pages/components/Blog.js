import React, { useEffect, useState } from "react";

const Blog = () => {
  const [posts, setPosts] = useState([]);
  const [Comments, setComments] = useState([]);

  const fetchData = () => {
    fetch("https://gorest.co.in/public/v2/posts/")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setPosts(data);
      });
    //fetch data from API sites posts
  };
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData2 = () => {
    fetch("https://gorest.co.in/public/v2/comments")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setComments(data);
      });
    //fetch data from API sites comments
  };
  useEffect(() => {
    fetchData2();
  }, []);

  const intersection = posts.filter((id) => Comments.includes(id));
  return (
    <div className="flex-col my-10">
      <h1 className="text-5xl font-bold text-gray-800 text-center my-10">
        The <span className="text-blue-600">Blog</span>
      </h1>
      {posts.length > 0 && (
        <div className="flex justfy-center items-center">
          <div className="grid md:grid-cols-4 grid-cols-1 gap-10">
            {posts.map((posts) => (
              <div className="md:mx-0 mx-5 w-72 h-100 rounded-lg crusor-pointer hover:bg-blue-600 group hover:shadow-2x1 p-6 border border-gray-100">
                <h3 key={posts.id}></h3>
                <h3 className="font-semibold uppercase text-sm my-2 text-blue-600 text-start group-hover:text-white">
                  {posts.title}
                </h3>
                <p className="font-normal text-sm text-gray-500 text-start group-hover:text-white">{posts.body}</p>
                <div className="flex">
                  <h4 className="font-semibold uppercase text-sm my-2 text-gray-600 text-start group-hover:text-white justify-between items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                    </svg>
                  </h4>
                  <h4 className="font-semibold uppercase text-sm my-2 text-gray-600 text-start group-hover:text-white justify-between items-center">Comments</h4>
                </div>
                {Comments.map((Comments) => (
                  <div>
                    <div className="flex">
                      <span className="font-semibold uppercase text-sm my-2 text-gray-500 text-start group-hover:text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </span>
                      <span key={Comments.id}></span>
                      <span className="font-semibold uppercase text-sm my-2 text-gray-500 text-start group-hover:text-white">
                        {Comments.name}
                      </span>
                    </div>

                    <p className="font-normal text-sm text-gray-500 text-start group-hover:text-white">{Comments.body}</p>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Blog;
