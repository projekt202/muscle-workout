-- MySQL dump 10.13  Distrib 8.0.19, for macos10.15 (x86_64)
--
-- Host: muscle.cecxjrpqgwvo.us-east-1.rds.amazonaws.com    Database: muscle
-- ------------------------------------------------------
-- Server version	5.7.22-log

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `muscleVideos`
--

DROP TABLE IF EXISTS `muscleVideos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `muscleVideos` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `muscleId` int(11) NOT NULL,
  `videoId` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `muscleId_idx` (`muscleId`),
  KEY `FK_video_idx` (`videoId`),
  CONSTRAINT `FK_muscle` FOREIGN KEY (`muscleId`) REFERENCES `muscles` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `FK_video` FOREIGN KEY (`videoId`) REFERENCES `videos` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `muscleVideos`
--

LOCK TABLES `muscleVideos` WRITE;
/*!40000 ALTER TABLE `muscleVideos` DISABLE KEYS */;
INSERT INTO `muscleVideos` VALUES (1,1,1),(2,1,2),(3,2,3),(4,2,4);
/*!40000 ALTER TABLE `muscleVideos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `muscles`
--

DROP TABLE IF EXISTS `muscles`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `muscles` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `description` tinytext,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `muscles`
--

LOCK TABLES `muscles` WRITE;
/*!40000 ALTER TABLE `muscles` DISABLE KEYS */;
INSERT INTO `muscles` VALUES (1,'Biceps','The biceps is a large muscle that lies on the front of the upper arm between the shoulder and the elbow. Both heads of the muscle arise on the scapula and join to form a single muscle belly which is attached to the upper forearm. While the biceps crosses '),(2,'Triceps','The triceps is a large muscle on the back of the upper limb of many vertebrates. It is the muscle principally responsible for extension of the elbow joint (straightening of the arm).'),(3,'Shoulder','test'),(4,'Chest','test'),(5,'Abdominals','test'),(6,'Traps','test');
/*!40000 ALTER TABLE `muscles` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `videos`
--

DROP TABLE IF EXISTS `videos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `videos` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `description` tinytext,
  `videoLink` varchar(255) DEFAULT NULL,
  `imageLink` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `videos`
--

LOCK TABLES `videos` WRITE;
/*!40000 ALTER TABLE `videos` DISABLE KEYS */;
INSERT INTO `videos` VALUES (1,'14 Min Dumbbell Bicep Workout','Biceps Workout at Home - Bicep Workout with Dumbbells Bicep Exercise','https://www.youtube.com/embed/AtzyDjQcjeQ','https://i.ytimg.com/an_webp/AtzyDjQcjeQ/mqdefault_6s.webp?du=3000&sqp=CMyu5_QF&rs=AOn4CLD78llGjTUhq40BQz4cWqpm_jSrHA'),(2,'Intense 5 Minute Dumbbell Bicep Workout','Give this intense 5 minute dumbbell bicep workout a try! You get a full biceps workout and you can still do it right from home, all you need is a pair of dumbbells! Also, this would work as a killer circuit to do at the gym. Great for building muscle, inc','https://www.youtube.com/embed/1FN6ovYpkoM','https://i.ytimg.com/an_webp/1FN6ovYpkoM/mqdefault_6s.webp?du=3000&sqp=CJDd5_QF&rs=AOn4CLAuuFuBFaMcSLmwy3k8jy-Ze6ELwA'),(3,'Intense 5 Minute Dumbbell Tricep Workout\n','Give this intense 5 minute dumbbell tricep workout a try! You get a full tricep workout and you can still do it right from home, all you need is a pair of dumbbells! Also, this would work as a killer circuit to do at the gym. Great for building muscle, in','https://www.youtube.com/embed/OtgFcKSywtQ','https://i.ytimg.com/an_webp/OtgFcKSywtQ/mqdefault_6s.webp?du=3000&sqp=CIyZ_PQF&rs=AOn4CLCdDuXtjVkqMck8Prj3WMaBR7S2sQ'),(4,'Bye Bye BAT WINGS | Tricep & Arm Workout\n','No more flabby arms! Tone your lose skin, strengthen your arms & get rid of bat wings with this Tricep & Arm Workout!','https://www.youtube.com/embed/0jhkYT-xplw','https://i.ytimg.com/an_webp/0jhkYT-xplw/mqdefault_6s.webp?du=3000&sqp=COSR_PQF&rs=AOn4CLBlscydLGwL015ze4XkSxbJURrYLg');
/*!40000 ALTER TABLE `videos` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-04-21 15:29:50
