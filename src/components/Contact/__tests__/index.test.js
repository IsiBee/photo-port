import React from 'react';
import { render, cleanup, getByTestId } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ContactForm from '..';

afterEach(cleanup);

describe('ContactForm is rendering', () => {
    it('renders', () => {
        render(<ContactForm />);
    });

    it('renders', () => {
        const { asFragment } = render(<ContactForm />)
        expect(asFragment()).toMatchSnapshot()
    });
});

describe('Contact me is visible', () => {
    it('inserts Contact me into the h1', () => {
        const { getByTestId } = render(<ContactForm
        />);
        expect(getByTestId('contact')).toHaveTextContent('Contact me');
    });
});

describe('Submit button renders', () => {
    it('submit button', () => {
        const { getByTestId } = render(<ContactForm
        />);
        expect(getByTestId('contact-button')).toHaveTextContent('Submit');
    });
});