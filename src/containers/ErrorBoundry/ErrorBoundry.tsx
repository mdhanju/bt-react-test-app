import { FormattedMessage } from 'react-intl'
import React, { ReactNode } from 'react'

type Props = {
    children?: ReactNode;
};

type State = {
    error: Error | null;
    errorInfo: { componentStack?: string } | null;
};

class ErrorBoundary extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props)
        this.state = { error: null, errorInfo: null }
    }

    componentDidCatch(error: Error, errorInfo: object): void {
        this.setState({
            error: error,
            errorInfo: errorInfo
        })
    }

    render(): React.ReactNode {
        if (this.state.errorInfo) {
            return (
                <div>
                    <h2>
                        <FormattedMessage id="errorboundry.error" />
                    </h2>
                    <details style={{ whiteSpace: 'pre-wrap' }}>
                        {this.state.error && this.state.error.toString()}
                        <br />
                        {this.state.errorInfo.componentStack}
                    </details>
                </div>
            )
        }
        // Render children if there's no error
        return this.props.children
    }
}
export default ErrorBoundary
