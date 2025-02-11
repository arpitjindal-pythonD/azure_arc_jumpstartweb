import React from 'react';
import BreadcrumbItem from './BreadcrumbItem';
import './BreadcrumbBar.css';

const BreadcrumbBar = (props) => {
    const breadcrumbs = ['Breadcrumb1', 'Breadcrumb2', 'Breadcrumb3', 'Breadcrumb4', 'Breadcrumb5', 'Current']
    return (
        <div className="breadcrumb-bar">
            <div className="rectangle-36705"></div>
            <div className="frame-63">
                {
                    breadcrumbs.map((breadcrumb, index) => {
                        return (
                            <React.Fragment key={index}>
                                <BreadcrumbItem 
                                    key={index}
                                    current={index === breadcrumbs.length - 1} 
                                    index={index+10}
                                >
                                    {breadcrumb}
                                </BreadcrumbItem>
                                {
                                    index !== breadcrumbs.length - 1 && (
                                        <span className="forwardSlash">/ </span>
                                    )
                                }
                            </React.Fragment>
                        )
                    })
                }
            </div>
            <div className="frame-60"></div>
            <div className="frame-2018775997">
                <div className="main-menu">
                    <div className="frame-59941">
                        <div className="community">Jump to section </div>
                        <svg
                            className="chevron"
                            width="15"
                            height="15"
                            viewBox="0 0 15 15"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M3.00484 5.18721C3.23265 4.95941 3.60199 4.95941 3.8298 5.18721L7.50065 8.85807L11.1715 5.18721C11.3993 4.95941 11.7687 4.95941 11.9965 5.18721C12.2243 5.41502 12.2243 5.78436 11.9965 6.01217L7.91313 10.0955C7.68533 10.3233 7.31597 10.3233 7.08818 10.0955L3.00484 6.01217C2.77703 5.78436 2.77703 5.41502 3.00484 5.18721Z"
                                fill="white"
                            />
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BreadcrumbBar;
