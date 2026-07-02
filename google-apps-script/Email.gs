function previewNewsletter(subject, body) {
  return {
    subject: sanitize(subject, 160),
    body: sanitize(body, 15000),
  };
}
