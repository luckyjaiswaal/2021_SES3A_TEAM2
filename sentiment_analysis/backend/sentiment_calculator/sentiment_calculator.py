from monkeylearn import MonkeyLearn


class sentiment_calculator:
    def sentiment_score(message):
        ml = MonkeyLearn('8f323ce5580a3a90f5ab41058571de9c1f218e5e')
        model_id = 'cl_pi3C7JiL'
        result = ml.classifiers.classify(model_id, message)
        return result.body
