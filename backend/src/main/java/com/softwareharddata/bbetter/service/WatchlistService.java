package com.softwareharddata.bbetter.service;

import com.softwareharddata.bbetter.db.ActionsMessageViewDb;
import com.softwareharddata.bbetter.db.WatchListMessageMysqlDb;
import com.softwareharddata.bbetter.exception.EntityNotFoundException;
import com.softwareharddata.bbetter.model.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

@Service
public class WatchlistService {

    private final WatchListMessageMysqlDb watchlistDb;
    private final ActionsMessageViewDb actionsMessageViewDb;


    @Autowired
    public WatchlistService(WatchListMessageMysqlDb watchlistDb, ActionsMessageViewDb actionsMessageViewDb) {
        this.watchlistDb = watchlistDb;
        this.actionsMessageViewDb = actionsMessageViewDb;
    }

    public Actions addToActions(ActionsDto actionsDto) {

        // todo: auslagern
        String id = UUID.randomUUID().toString();

        Actions action = Actions.builder()
                .idUserSingup(actionsDto.getIdUserSingup())
                .idMessage(actionsDto.getIdMessage())
                .action(actionsDto.getAction())
                .build();
        return watchlistDb.save(action);
    }



        public List<Actions> getActions(String action) {
            return watchlistDb.findAllByAction(action)
                    .orElseThrow(() -> new EntityNotFoundException(String.format("Action not found with: %s", action)));

        }

        public List<Actions_Message> getActionsFromUser(String idUserSingup, String action) {
            //    return watchlistDb.findAllByIdUserSingupAndAction(idUserSingup, action)
                return actionsMessageViewDb.findAllByIdUserSingupAndAction(idUserSingup, action)
                    .orElseThrow(() -> new EntityNotFoundException(String.format("Action or idUserSingup not found with: %s", action)));

        }

    /*public Void deleteFromWatchlist(int idAction) {
        return watchlistDb.deleteByIdAction(idAction).
                orElseThrow(() -> new EntityNotFoundException(String.format("Action or idUserSingup not found with: %s", idAction)));
    }*/

}
