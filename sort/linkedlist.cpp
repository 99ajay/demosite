#include<iostream>
using namespace std;
class Node
{
    public:
    int data;
    Node *next;
    Node()
    {
        next=NULL;
    }
};
class linkedlist
{
   public:
   Node *head;
   Node *tail;
   int size;
    void addlast(int val) {
            Node *node = new Node();
            node->data = val;
            if (this->size == 0) {
                this->head = node;
                this->tail = node;
            } else {
                this->tail->next = node;
                this->tail = node;
            }
            this->size++;

        }

        void display() {
            Node *ptr = this->head;
            while (ptr != NULL) {
                 cout<<ptr->data<<" ";
                ptr = ptr->next;
            }
            cout<<endl;
        }
      
};
  int sizet(linkedlist *j)
        {
            int count=0;
            Node *ptr=j->head;
            while(ptr!=NULL)
            {
                count++;
                ptr=ptr->next;
            }
          return count;
        }
int main()
{
linkedlist *ll = new linkedlist();
ll->addlast(34);
ll->addlast(35);
ll->addlast(36);
ll->addlast(37);
ll->addlast(38);
ll->addlast(39);
ll->display();
cout<<sizet(ll)<<endl;

return 0;

 

}