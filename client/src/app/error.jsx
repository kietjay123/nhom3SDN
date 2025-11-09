'use client';

// @project
import Error500Page from '@/components/Error500';

/***************************  ERROR 500 - DATA  ***************************/

const data = {
  primaryBtn: { children: 'Back to Login Page', onClick: () => (window.location.href = '/auth/login') },
  heading: 'Please try again later or feel free to contact us if the problem persists.'
};

// ERROR 500 PAGE
export default function InternalServerError() {
  return <Error500Page {...data} />;
}
