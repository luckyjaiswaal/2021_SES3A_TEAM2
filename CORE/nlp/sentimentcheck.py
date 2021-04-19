from textblob import TextBlob
statement1 = "The food at radison was awesome and great"
statement2 = "I really like the new design of your website!"
statement3 = "I’m not sure if I like the new design"
statement4 = "The new design is awful!"

blob1 = TextBlob(statement1)
blob2 = TextBlob(statement2)
blob3 = TextBlob(statement3)
blob4 = TextBlob(statement4)

print(blob1.sentiment)
if(blob1.sentiment[0]>0):
    print("Statement1 is Positive")
else:
    print("Statement1 is Negetive")


print(blob2.sentiment)
if(blob2.sentiment[0]>0):
    print("Statement2 is Positive")
else:
    print("Statement2 is Negetive")

print(blob3.sentiment)
if(blob3.sentiment[0]>0):
    print("Statement3 is Positive")
else:
    print("Statement3 is Negetive")

print(blob4.sentiment)
if(blob4.sentiment[0]>0):
    print("Statement4 is Positive")
else:
    print("Statement4 is Negetive")
