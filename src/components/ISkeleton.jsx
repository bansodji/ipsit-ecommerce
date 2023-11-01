import React from 'react';
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';

const ISkeleton = ({ ItemCount }) => {
    // Create an array of length ItemCount to repeat the Skeleton component
    const skeletonItems = Array.from({ length: ItemCount }, (_, index) => (
        <div className="col-lg-3" key={index}>
            <Stack spacing={1}>
                <Skeleton variant="rectangular" width="100%" height={150} />
                <Skeleton variant="text" width={210} sx={{ fontSize: '1rem' }} />
                <Skeleton variant="text" width={130} sx={{ fontSize: '1rem' }} />
            </Stack>
        </div>
    ));

    return (
        <div className="container">
            <div className="row">
                {skeletonItems}
            </div>
        </div>
    );
}

const ISkeleton2 = ({ ItemCount }) => {
    // Create an array of length ItemCount to repeat the Skeleton component
    const skeletonItems = Array.from({ length: ItemCount }, (_, index) => (
        <div className="col-lg-4" key={index}>
            <Stack spacing={1}>
                <Skeleton variant="rectangular" width="100%" height={150} />
                <Skeleton variant="text" width={210} sx={{ fontSize: '1rem' }} />
                <Skeleton variant="text" width={130} sx={{ fontSize: '1rem' }} />
            </Stack>
        </div>
    ));

    return (
        <div className="container">
            <div className="row">
                {skeletonItems}
            </div>
        </div>
    );
}

const PSkeleton = () => {
    return (
        <div className="container">
            <div className="row g-0">
                {/* <div className="col-md-1 col-2">
                    <Stack spacing={1}>
                        <Skeleton variant="circular" width={40} height={40} />
                        <Skeleton variant="circular" width={40} height={40} />
                        <Skeleton variant="circular" width={40} height={40} />
                        <Skeleton variant="circular" width={40} height={40} />
                    </Stack>
                </div> */}
                <div className="col-md-5 col-12">
                    <Stack spacing={1}>
                        <Skeleton variant="rectangular" width="100%" height={300} />
                        <Skeleton variant="text" width={210} sx={{ fontSize: '1rem' }} />
                        <Skeleton variant="text" width={130} sx={{ fontSize: '1rem' }} />
                    </Stack>
                </div>
                <div className="col-md-1"></div>
                <div className="col-md-6 d-none d-sm-block">
                    <Stack spacing={1}>
                        <Skeleton variant="text" width={250} sx={{ fontSize: '1rem' }} />
                        <Skeleton variant="text" width="100%" sx={{ fontSize: '1rem' }} />
                        <Skeleton variant="text" width="100%" sx={{ fontSize: '1rem' }} />
                        <Skeleton variant="text" width="100%" sx={{ fontSize: '1rem' }} />
                        <Skeleton variant="text" width="100%" sx={{ fontSize: '1rem' }} />
                        <Skeleton variant="text" width="100%" sx={{ fontSize: '1rem' }} />
                        <Skeleton variant="text" width="100%" sx={{ fontSize: '1rem' }} />
                        <Skeleton variant="text" width="100%" sx={{ fontSize: '1rem' }} />
                        <Skeleton variant="text" width="100%" sx={{ fontSize: '1rem' }} />
                        <Skeleton variant="text" width="100%" sx={{ fontSize: '1rem' }} />
                    </Stack>
                </div>
            </div>
        </div>
    );
}

export { PSkeleton,ISkeleton2 };
export default ISkeleton;