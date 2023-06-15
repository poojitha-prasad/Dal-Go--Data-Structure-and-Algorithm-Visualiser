import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Tree() {
    const hexagonMenuStyle = {
        justifyContent: "center",
        display: "flex"
    };

    document.title = "VisualDSA ~ Tree";

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="tree">
            <div className="pt-table desktop-768">
                <div className="pt-tablecell page-home relative">
                                
                    <div className="overlay">
                        <div className="title">
                            <hr /><h2 className="font-weight-bold">Tree</h2><hr />
                        </div>
                        <div className="container my-5">
                            <div className="row">
                                <div className="hexagon-menu clear" style={hexagonMenuStyle}>
                                    <div className="hexagon-item" style={{transform: "rotate(30deg)"}}>
                                        <div className="hex-item">
                                            <div></div>
                                            <div></div>
                                            <div></div>
                                        </div>
                                        <div className="hex-item">
                                            <div></div>
                                            <div></div>
                                            <div></div>
                                        </div>
                                        <Link className="hex-content" to='/tree/binaryTree'>
                                            <span className="hex-content-inner">
                                                <span className="title">Binary Tree</span>
                                            </span>
                                            <svg viewBox="0 0 173.20508075688772 200" height="200" width="174" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M86.60254037844386 0L173.20508075688772 50L173.20508075688772 150L86.60254037844386 200L0 150L0 50Z" fill="#1e2530"></path></svg>
                                        </Link>
                                    </div>
                                    <div className="hexagon-item" style={{transform: "rotate(30deg)"}}>
                                        <div className="hex-item">
                                            <div></div>
                                            <div></div>
                                            <div></div>
                                        </div>
                                        <div className="hex-item">
                                            <div></div>
                                            <div></div>
                                            <div></div>
                                        </div>
                                        <Link className="hex-content" to='/tree/binarySearchTree'>
                                            <span className="hex-content-inner">
                                                <span className="title">Binary Search Tree</span>
                                            </span>
                                            <svg viewBox="0 0 173.20508075688772 200" height="200" width="174" version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M86.60254037844386 0L173.20508075688772 50L173.20508075688772 150L86.60254037844386 200L0 150L0 50Z" fill="#1e2530"></path></svg>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}
