function resetBoard() {
  $('td').each( function() {
    if(! $(this).hasClass('teamName')) {
      $(this).html('0');
    }
  });
}

function resetOuts() {
  $('.out').each( function() {
    if($(this).hasClass('fa-circle')) {
      $(this).removeClass('fa-circle');
    }

    if(! $(this).hasClass('fa-circle-thin')) {
      $(this).addClass('fa-circle-thin');
    }

  });
}

function resetTeamTotal() {
  $('#team-total').html('0');
}

$(document).ready( function() {
  $('#startGame').on('click', function() {
    var away = $('#awayTeamName').val();
    var home = $('#homeTeamName').val();
    $('#main-view').hide();
    $('#game-view').show();
    $('#away').html(away);
    $('#home').html(home);
    $('#upToBat').html(away);
    resetBoard();
    resetOuts();
    resetTeamTotal();
  });
});
