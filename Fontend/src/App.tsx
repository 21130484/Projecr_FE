// src/App.tsx
import React from 'react';
import './css/App.css';
import Header from './component/Header';
import Footer from './component/Footer';
import ArticleDetail from './ArticleDetail';

const App: React.FC = () => {
    const article = {
        title: "Exploring the Beauty of React and TypeScript",
        content: "React and TypeScript is a powerful combination for building scalable and maintainable web applications...",
        author: "Jane Doe",
    };

    return (
        <div className="App">
            <Header />
            <main className="main-content">
                <ArticleDetail
                    title={article.title}
                    content={article.content}
                    author={article.author}
                />
            </main>
            <Footer />
        </div>
    );
};

export default App;
