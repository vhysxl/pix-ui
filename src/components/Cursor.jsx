export function SpongebobCursor({ children }) {
    return (
        <div style={{ cursor: `url('https://images.builder.io/api/v1/image/assets%2FYJvScAIYHAQbZhUthvAySuv9ZFF2%2F6264906f2e824888805f778d910a307a') 16 16, auto`, minHeight: '100vh' }}>
            {children}
        </div>
    );
}

export function CutePinkPointer({ children }) {
    return (
        <div style={{ cursor: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="%23FFB6C1" d="M11 11.5v6c0 1.93 1.57 3.5 3.5 3.5s3.5-1.57 3.5-3.5v-1c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5v-1c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5v-1c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5v-3C18 1.57 16.43 0 14.5 0c-1.35 0-2.52.77-3.1 1.9C10.82 1.34 10.18 1 9.5 1 7.57 1 6 2.57 6 4.5v1.6l-1.6.8c-.8.4-1.4 1.2-1.4 2.1s.6 1.7 1.4 2.1l1.6.8v.1c0 1.93 1.57 3.5 3.5 3.5.34 0 .67-.05 1-.14z"/></svg>') 11 0, auto`, minHeight: '100vh' }}>
            {children}
        </div>
    );
}