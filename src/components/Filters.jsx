import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { FiltersData, CategoryData } from './Data';
import FilteredContent from './FilteredContent';
import { useFilterContext } from '../context/filterContext';
import { Button2 } from './Buttons';

const FilterWrapper = styled.section`
    .filter-sm{
        /* display: none; */
    }

    @media(max-width: ${({ theme }) => theme.screen.lg}){
        .filter-lg{
            display: none;
        }
        .filter-sm{
            display: flex;
        }
    }
`;

const FilterLgContainer = styled.div`
    .filter-box{
        .filter-box-title{
            font-size:0.95rem;
            font-weight: 500;
        }
        ul{
            padding-left: 10px;
            li{
                font-size:0.9rem;
                padding: 5px 0;
                cursor:pointer;

                &:hover{
                    color: ${({ theme }) => theme.colors.theme1};
                    font-weight:400;
                }
            }
        }
    }
`;

const FilterSmContainer = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content:space-between;
`;

const BottomOffCanvasContainer = styled.div`
    height: auto !important;

    li{
        cursor:pointer;
    }
`;

const Filters = () => {
    const content = useFilterContext();
    const [active, setActive] = useState("all");
    const [filteredData, setFilteredData] = useState([]);
    const [offcanvasTitle, setOffcanvasTitle] = useState("");
    const [offcanvasBody, setOffcanvasBody] = useState([]);

    useEffect(() => {
        setFilteredData(content[active]);

        // Scroll to the top of the page when navigating to a new route
        window.scrollTo(0, 0);
    }, [active]);

    const handleFilterClick = (e, data) => {
        let filters = e.target.getAttribute("data-filter").split(",");
        let title = data;
        setOffcanvasTitle(title);
        setOffcanvasBody(filters); // Pass the array of filter items
    }

    const FilterLg = () => {
        return (
            <FilterLgContainer className='ip-box w-100 filter-lg'>
                <h5 className='border-bottom p-3 uppercase'>Filters</h5>
                {
                    Object.keys(FiltersData).map((data, index) => (
                        <div className={`filter-box p-3 ${(data != "price") ? "border-bottom" : ""}`} key={index}>
                            <h6 className='filter-box-title uppercase'>{data}</h6>
                            <ul>
                                {
                                    FiltersData[data].map((d, i) => {
                                        return (
                                            <li onClick={() => { setActive(d) }}
                                                key={i} className={`title ${(active == d) ? 'theme1 font-400' : 'font-300'}`}>
                                                <a>{d}</a>
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                    ))
                }
            </FilterLgContainer>
        );
    }

    const FilterSm = () => {
        return (
            <FilterSmContainer className='filter-sm'>
                {
                    Object.keys(FiltersData).map((data, index) => (
                        <div
                            key={index}
                            data-bs-toggle="offcanvas"
                            data-bs-target="#offcanvasBottom"
                            aria-controls="offcanvasBottom"
                            onClick={(e) => { handleFilterClick(e, data) }}
                            data-filter={FiltersData[data]}
                        >
                            <Button2
                                name={data}
                                dataFilter={FiltersData[data]}
                            />
                        </div>
                    ))
                }

            </FilterSmContainer>
        );
    }

    return (
        <FilterWrapper className='container mt-3'>
            <div className='row'>
                <div className="col-lg-3">
                    <FilterLg />
                </div>
                <div className="col-lg-9">
                    <FilterSm />
                    <FilteredContent content={filteredData} />
                </div>
            </div>
            {/* <Offcanvas title={offcanvasTitle} body={offcanvasBody} /> */}
            <BottomOffCanvasContainer className="offcanvas offcanvas-bottom" id="offcanvasBottom" aria-labelledby="offcanvasBottomLabel">
                <div className="offcanvas-header border-bottom py-3 mb-2">
                    <h6 className="offcanvas-title uppercase" id="offcanvasBottomLabel">{offcanvasTitle}</h6>
                    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body pt-0 pb-5 mb-4">
                    <ul>
                        {
                            offcanvasBody.map((data, index) => (
                                <li
                                    key={index}
                                    onClick={() => { setActive(data) }}
                                    data-bs-dismiss="offcanvas"
                                    className={`title py-1 ${(active == data) ? 'theme1 font-400' : 'font-300'}`}
                                >
                                    {data}
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </BottomOffCanvasContainer>
        </FilterWrapper>
    );
}

export default Filters;