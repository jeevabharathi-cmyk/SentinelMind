import React from 'react';
import DOMPurify from 'dompurify';

const SanitizedText = ({ text, className }) => {
    const clean = DOMPurify.sanitize(text);

    return (
        <span
            className={className}
            dangerouslySetInnerHTML={{ __html: clean }}
        />
    );
};

export default SanitizedText;
