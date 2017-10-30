const validate = validator(req.body);
const recipe = Object.assign({}, req.body, {
  upvotes: 0,
  downvotes: 0,
  favorited: 0,
  views: 0,
});
if (validate.valid) {
  recipes.push(recipe);
  return res.status(200).json({
    feed: recipes[recipes.length - 1],
    message: 'success',
    error: false
  });
}
return res.status(400).send({ status: false, message: validate.message });