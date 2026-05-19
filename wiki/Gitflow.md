# Gitflow

Das Branch Konzept ist einfach und sehr praktisch. Da wir ein kleines Team sind und in 2 Untergruppen unterteilt, gibt es Sinn nur 3 Branches zu haben:
- main
- frontend
- backend

---
# Branch Naming Rules
Wer an einem der beiden Working-Branches (frontend, backend) arbeitet, sollte laut dieser Schablone ihre Branches nennen:

```
feat|fix|refactor/frontend|backend-[task_id]
task_id is optional
````

```
example:
> feat/frontend-login-page-42
> fix/backend-database-error-105
````

---
 # Pull Request Prozess 
 Es wurde absichtlich entschieden, dass kein Entwickler selbst allein mit main Merges machen kann. Dafür muss man einen Pull Request erstellen, der von einer anderen Person rezensiert wird. Nachdem genehmigtem Pull Request kann der Branch gemerged werden.

 ---
 