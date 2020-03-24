import React, { useEffect } from 'react';
import { string } from 'prop-types';
import { connect } from 'react-redux';
import ReactGA from 'react-ga';
import packageInfo from '../../../package.json';

const isNotDevelopment = process.env.NODE_ENV !== 'development';

// Initialize Google Analytics in production
if (isNotDevelopment)
    ReactGA.initialize(process.env.REACT_APP_GOOGLE_ANALYTICS_TRACKING_ID, {
        gaOptions: {
            appName: process.env.REACT_APP_TITLE,
            appVersion: packageInfo.version,
            anonymizeIp: true,
            forceSSL: true,
            siteSpeedSampleRate: 25
        }
    });

const withAnalytics = WrappedComponent => {
    const AnalyticsComponent = ({ pathname, search }) => {
        useEffect(() => {
            // Only use analytics in production
            if (isNotDevelopment)
                // Google Analytics Page View Tracking
                ReactGA.pageview(pathname + search);
        }, [pathname, search]);

        return <WrappedComponent />;
    };

    AnalyticsComponent.propTypes = {
        pathname: string.isRequired,
        search: string
    };

    AnalyticsComponent.defaultProps = {
        search: ''
    };

    const mapStateToProps = ({
        router: {
            location: { pathname, search }
        }
    }) => ({
        pathname,
        search
    });

    return connect(mapStateToProps)(AnalyticsComponent);
};

export default withAnalytics;
