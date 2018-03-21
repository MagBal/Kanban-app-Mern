import { Router } from 'express';
import * as LaneController from '../controllers/lane.controller';


const router = new Router();

//Get all Lanes
router.route('/lanes').get(LaneController.getLanes);

//Add a new lane
router.route('/lanes').post(LaneController.addLane);

//Edit a lane 
router.route('/lanes').put(LaneController.editLane);

//Delete a lane
router.route('/lanes/:laneId').delete(LaneController.deleteLane);

export default router;