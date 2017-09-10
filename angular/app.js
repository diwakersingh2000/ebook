var app = angular.module('myApp', ['ngRoute']);

  app.controller('myCtrl',['$http','$scope',function($http,$scope) {
    //create a context
    var main = this;
    // adding a sample chapter
    this.allBooks=[
      {"title":"Sample First Chapter","content":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."}
  ];

  // function to push new chapter into the array
    $scope.myBookFunction = function()
    {
        var book = angular.copy($scope.books);
    		main.allBooks.push(book);
        console.log(main.allBooks);
    }

    // function to hide current VIEW CHAPTER view
    // and display editable window
    $scope.myBookEditFunction = function()
    {
        $('#savedChapterDetails').hide();
        $('#editChapterDetails').show();
    }

    // function to update chapter content
    $scope.myClickedBook = function(id)
    {
        var bookIndex = id;
        console.log(bookIndex);
        var name = main.allBooks[id].title;
        $scope.bookName= main.allBooks[id].title;
        $scope.bookContent= main.allBooks[id].content;
        $('#savebutton').click(function(){
          main.allBooks[id].title = $scope.bookName;
          main.allBooks[id].content = $scope.bookContent;

        })
        $('#savedChapterDetails').show();
        $('#editChapterDetails').hide();
    }
  }]); // end controller
