n=int(input())

score=[[] for i in range(n)]
avg=[]

for i in range(n):
    score[i]=list(map(int,input().split()))

for i in range(n):
    sum=0
    for j in range(score[i][0]):
        sum+=score[i][j+1]
    avg.append(sum/score[i][0])

for i in range(n):
    overArr=list(filter(lambda x: x>avg[i],score[i][1:]))
    print('{:.{s}f}%'.format(len(overArr)/score[i][0]*100,s=3))


