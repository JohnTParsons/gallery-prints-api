import { configure as rtlConfigure } from '@testing-library/react';

rtlConfigure({ testIdAttribute: 'data-testid' });

process.env.HARVARD_ART_BASE_URL = 'https://api.harvardartmuseums.org/';
process.env.HARVARD_ART_API_KEY = 'test-api-key';
