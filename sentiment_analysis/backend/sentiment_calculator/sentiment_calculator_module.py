from monkeylearn import MonkeyLearn

ml = MonkeyLearn('8f323ce5580a3a90f5ab41058571de9c1f218e5e')
data = ['I love everything about @Zendesk!', 'There's a bug in the new integration]
model_id = 'cl_pi3C7JiL'
result = ml.classifiers.classify(model_id, data)

print(result.body)
