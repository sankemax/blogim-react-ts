import * as Sentry from "@sentry/browser";

export interface InfoState {
    numOfBlogs: number
}

export interface InfoAction {
    type: 'UPDATE_NUM_OF_BLOGS'
    numOfBlogs: number
}

export default function infoReducer(previousState: InfoState, action: InfoAction): InfoState {
    switch (action.type) {
        case 'UPDATE_NUM_OF_BLOGS':
            return { numOfBlogs: action.numOfBlogs };
        default:
            Sentry.captureException(new Error(`infoReducer: action of type '${action.type}' does not exist`));
            return previousState;
    }
}
